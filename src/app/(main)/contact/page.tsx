import { BlurCircle } from '@/components/shared/blur-circle'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'

import ContactForm from './_components/contact-form'

export default function ContactPage() {
    return (
        <>
            <GenerateJsonLd showJsonLdOrganization={true} showJsonLdWebpage={false} />
            <section
                className={`
                  relative flex h-full min-h-[calc(100vh-64px)] items-center justify-center
                  lg:min-h-[calc(100vh-100px)]
                `}
            >
                <BlurCircle color="blue" left={-254} size={591} top={-100} />
                <BlurCircle color="green" left={-208} size={500} top={264} />
                <BlurCircle color="green" right={252} size={500} top={0} />
                <BlurCircle color="blue" right={-367} size={591} top={233} />
                <BlurCircle color="blue" right={45} size={591} top={281} />
                <ContactForm />
            </section>
        </>
    )
}

export function generateMetadata() {
    return generateSeo({ pathname: '/contact', seo: { MetaDescription: 'Contact with us', MetaTitle: 'Contact us' } })
}
