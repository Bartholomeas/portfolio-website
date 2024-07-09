import {FetchResponse} from '@/types';
import {PrivacyPolicyPage} from '@/types/pages';
import {API_URL} from "@/utils/variables";

export async function getPrivacyPolicyPage(): Promise<
    FetchResponse<PrivacyPolicyPage | undefined>
> {

    try {
        const res = await fetch(
            `${API_URL}/api/privacy-policy-page`,
        )

        if (!res.ok) {
            return Promise.reject(
                new Error(`getPrivacyPolicyPage: error ${res.status}`).message
            );
        }

        return await res.json();
    } catch (err: any) {
        throw new Error(`getPrivacyPolicyPage: ${err}`);
    }
}
