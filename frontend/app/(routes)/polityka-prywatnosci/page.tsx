import {Metadata} from 'next';

import {getPrivacyPolicyPage} from "@/requests/getPrivacyPolicyPage";

import {Container} from '@/components/common/mantine';

export const metadata: Metadata = {
    title: 'Polityka prywatności | Bartosz Stefaniak',
    description: 'Obowiązująca polityka prywatności',
};

export default async function PrivacyPolicyPage() {
    // const getPrivacyPolicyPagePromise = getPrivacyPolicyPage().catch(() => ({data: undefined}));
    // const {data} = await getPrivacyPolicyPagePromise
    const {data} = await getPrivacyPolicyPage().catch((err) => {
        console.error('Error: ', err)
        return {data: undefined}
    })

    console.log("Xdd", data)
    return (
        <Container size="sm" mih="100vh" h="100%" px={24} py={64}>
            xdd
        </Container>
    );
}
