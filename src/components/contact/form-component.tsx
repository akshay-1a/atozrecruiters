import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

interface FormField {
    name: string
    label: string
    type: string
    required: boolean
}

interface FormComponentProps {
    formtype: string
    imgCap: string
    imgUrl: string
    imgPos: string
    formData: {
        innerHeading: string
        purpose: string
        fields: FormField[]
    }
    onSubmit: (formData: FormData) => void
}

export function FormComponent({ formtype, imgCap, imgUrl, imgPos, formData, onSubmit }: FormComponentProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setError(null)
        setSuccess(false)

        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        formData.append('formType', formtype)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Form submission failed')
            }

            setSuccess(true)
            formElement.reset()
            onSubmit(formData)

        } catch (error) {
            console.error('Error submitting form:', error)
            setError('An error occurred while submitting the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card id={`${formtype}`}>
            <FormImage position={imgPos} imgCap={imgCap} imgUrl={imgUrl}>
                <CardHeader>
                    <CardTitle>{formData.innerHeading}</CardTitle>
                    <CardDescription>{formData.purpose}</CardDescription>
                </CardHeader>
                <CardContent className="md:space-y-4">
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            Form submitted successfully! We'll get back to you soon.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formData.fields.map((field) => (
                                <div key={field.name} className={`space-y-2 ${field.type === "textarea" ? "md:col-span-2" : ""}`} >
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                    {field.type === "textarea" ? (
                                        <Textarea id={field.name} name={field.name} required={field.required} />
                                    ) : field.type === "file" ? (
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type="file"
                                            required={field.required}
                                            className="file:h-full p-0 file:text-sm file:font-semibold file:bg-stone-200 file:text-stone-900 hover:file:bg-stone-300"
                                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        />
                                    ) : (
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </CardContent>
            </FormImage>
        </Card>
    )
}

export function FormImage({
    imgCap,
    imgUrl,
    position,
    children,
}: Readonly<{
    imgCap: string;
    imgUrl: string;
    position: string;
    children: React.ReactNode;
}>) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex flex-col-reverse md:gap-5 select-none ${position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="md:flex-1">{children}</div>
            <div className="md:flex-1 relative m-4 mb-0 md:mb-4 rounded-lg overflow-hidden">
                <div
                    className=""
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute inset-0 z-20 flex bg-black/60 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100 ' : 'opacity-0'
                            }`}
                    >
                        <p className="text-white font-extrabold text-3xl p-24 text-center select-none">{imgCap}</p>
                    </div>
                    <div className="aspect-w-4 aspect-h-3 h-60">
                        <Image
                            src={imgUrl}
                            alt={imgCap}
                            priority={true}
                            fill
                            className={`rounded-lg transition-transform duration-300 object-cover
                                ${position === "left" ? 'object-[0px_42%] md:object-center ' : 'object-bottom'} ${isHovered ? 'scale-125' : 'scale-100'
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

