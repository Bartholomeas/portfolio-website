import {Container, Stack} from '@/components/common/mantine';

import {BenefitsSection} from '@/components/views/landing/benefits/BenefitsSection';
import {CaseStudiesSection} from '@/components/views/landing/caseStudies/CaseStudiesSection';
import {LandingSection} from '@/components/views/landing/landing/LandingSection';

import {ProjectRoadSection} from '@/components/views/landing/projectRoad/ProjectRoadSection';

import {getHomePage} from '@/lib/getHomePage';
import {BlogPostsSection} from "@/components/views/landing/blogPosts/BlogPostsSection";
import {getBlogPosts} from "@/lib/blog/getBlogPosts";

async function Home() {
    const homePageData = getHomePage().catch(() => ({
        data: undefined
    }));
    const blogPostsPromise = getBlogPosts(true).catch(() => ({
        data: undefined
    }));

    const {data} = await homePageData;
    const {data: blogPosts} = await blogPostsPromise

    return (
        <Stack
            align="center"
            spacing={64}
            w="100%"
            h="100%"
            sx={{
                overflow: 'hidden',
            }}
        >
            <LandingSection/>
            <Container size="lg" w="100%" sx={{overflow: 'visible'}}>
                <BlogPostsSection data={blogPosts}/>
                <CaseStudiesSection data={data?.caseStudiesSection}/>
                <BenefitsSection/>
                <ProjectRoadSection/>
            </Container>
        </Stack>
    );
}

export default Home;
