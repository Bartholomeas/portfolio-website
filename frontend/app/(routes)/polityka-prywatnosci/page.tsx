import {Metadata} from 'next';

import {getPrivacyPolicyPage} from "@/requests/getPrivacyPolicyPage";

import {Container, Stack} from '@/components/common/mantine';
import {Title} from "@/components/common/mantine/Title";
import {MarkdownContent} from "@/components/common/special/MarkdownContent";

export const metadata: Metadata = {
    title: 'Polityka prywatności | Bartosz Stefaniak',
    description: 'Obowiązująca polityka prywatności',
    robots: {
        index: false
    }
};

export default async function PrivacyPolicyPage() {

    const {data} = await getPrivacyPolicyPage().catch((err) => {
        console.error('Error: ', err)
        return {data: undefined}
    })

    return (
        <Container size="sm" mih="100vh" h="100%" px={24} py={64}>
            <Stack spacing={16} mb={48}>
                <Title order={1} size={64} lh={1} textColor="textPrimary">
                    Polityka prywatności
                </Title>
                <Title order={2} textColor="textSecondary">
                    Znajdziesz tutaj obowiązującą politykę prywatności.
                </Title>
                <MarkdownContent content={data?.content}/>
            </Stack>
        </Container>
    );
}
