export interface PaymentService {
  id: string;
  name: string;
  amount: number;
}

export interface PaymentFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

export interface PaymentStep {
  title: string;
  description: string;
}

export interface PaymentPageData {
  heading: string;
  introduction: string;
  image: string;
  formFields: PaymentFormField[];
  services: PaymentService[];
  paymentSteps: PaymentStep[];
}

export const paymentPageData: PaymentPageData = {
  heading: "Seamless Payments, Exceptional Service",
  introduction:
    "Welcome to our streamlined payment portal. We've designed this process to be as smooth as possible, ensuring you can quickly and securely pay for the services you need. Let's get started on your journey to success!",
  image: "/qr-code.jpg",
  formFields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Last Name",
    },
    {
      name: "mobileNumber",
      label: "Mobile Number",
      type: "tel",
      required: true,
      placeholder: "(+91) 91 5151 5209",
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "yourmail@example.com",
    },
    {
      name: "service",
      label: "Choose Your Service",
      type: "select",
      required: true,
    },
    {
      name: "amount",
      label: "Amount",
      type: "text",
      required: true,
      placeholder: "₹0",
    },
    {
      name: "paymentScreenshot",
      label: "🔼Payment Screenshot",
      type: "file",
      required: true,
    },
    {
      name: "referenceNumber",
      label: "Transaction Reference",
      type: "text",
      required: true,
      placeholder: "e.g., TXN123456",
    },
  ],
  services: [
    { id: "interview", name: "Interview Service", amount: 1500 },
    { id: "resume", name: "Resume Modification Service", amount: 1500 },
  ],
  paymentSteps: [
    {
      title: "Select Your Service",
      description:
        "Choose the package that best fits your career goals and aspirations. Each service is tailored to provide maximum value for your professional journey.",
    },
    {
      title: "Scan & Pay",
      description:
        "Use your preferred payment app to scan our secure QR code. It's quick, easy, and ensures your transaction is processed instantly.",
    },
    {
      title: "Capture the Moment",
      description:
        "Take a screenshot of your payment confirmation. This serves as your receipt and helps us verify your transaction swiftly.",
    },
    {
      title: "Note Your Reference",
      description:
        "Jot down the unique transaction reference number provided by your payment app. This is your key to tracking your payment.",
    },
    {
      title: "Complete the Form",
      description:
        "Fill in your details and upload your payment screenshot. This information helps us link your payment to your account accurately.",
    },
    {
      title: "Submit & Relax",
      description:
        "Hit the submit button and you're all set! We'll process your payment and get you started on your chosen service in no time.",
    },
  ],
};
