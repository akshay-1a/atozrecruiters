import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"


interface FormField {
    name: string
    label: string
    type: string
    required: boolean
}

interface FormComponentProps {
    imgCap: string
    imgUrl: string
    imgPos: string
    formData: {
        innerHeading: string
        purpose: string
        fields: FormField[]
    }
    onSubmit: (formData: Record<string, string>) => void
}

export function FormComponent({ imgCap, imgUrl, imgPos, formData, onSubmit }: FormComponentProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        const data: Record<string, string> = {}
        formData.forEach((value, key) => {
            data[key] = value.toString()
        })
        onSubmit(data)
    }

    return (
        <Card>
            <FormImage position={imgPos} imgCap={imgCap} imgUrl={imgUrl}>
                <CardHeader>
                    <CardTitle>{formData.innerHeading}</CardTitle>
                    <CardDescription>{formData.purpose}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formData.fields.map((field) => (
                                <div key={field.name} className={`space-y-2 ${field.type === "textarea" ? "col-span-2" : ""}`} >
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                    {field.type === "textarea" ? (
                                        <Textarea id={field.name} name={field.name} required={field.required} />
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
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
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
        <div className={`flex gap-5 ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="flex-1">{children}</div>
            <div className="flex-1 relative m-4 overflow-hidden rounded-lg">
                <div
                    className=""
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute inset-0 z-20 flex bg-black/60 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100 ' : 'opacity-0'
                            }`}
                    >
                        <p className="text-white font-extrabold text-3xl p-24 text-center">{imgCap}</p>
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                        <Image
                            src={imgUrl}
                            alt={imgCap}
                            fill
                            className={`rounded-lg transition-transform duration-300 object-cover
                                ${position === "left" ? 'object-center' : 'object-bottom'} ${isHovered ? 'scale-125' : 'scale-100'
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}