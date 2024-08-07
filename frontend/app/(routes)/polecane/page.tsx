import {Metadata} from 'next';

import {Container, Text} from '@/components/common/mantine';
import {RecommendedHeader} from '@/components/views/recommended/RecommendedHeader';
import {RecommendedListsSection} from '@/components/views/recommended/RecommendedListsSection';
import {RecommendedShapesWrapper} from '@/components/views/recommended/RecommendedShapesWrapper';

import {getRecommendedPage} from '@/requests/getRecommendedPage';

export const metadata: Metadata = {
    title: 'Polecane aplikacje i sprzęt | Bartosz Stefaniak',
    description: "Odkryj moje wybory w aplikacjach i sprzęcie! W sekcji 'Polecane' znajdziesz sprawdzone produkty, które polecam ze względu na ich wydajność i jakość!",
    alternates: {
        canonical: '/polecane'
    },
};

export default async function Recommended() {
    const getRecommendedPagePromise = getRecommendedPage().catch(() => ({data: undefined}));
    const {data} = await getRecommendedPagePromise;

    return (
        <Container size="sm" mih="100vh" h="100%" px={24} py={64}>
            <RecommendedShapesWrapper>
                <RecommendedHeader/>
                {data ? <RecommendedListsSection data={data.recommendedGroups}/> : <Text>Brak danych</Text>}
            </RecommendedShapesWrapper>
        </Container>
    );
}
