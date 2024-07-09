import {createStyles, rem} from "@mantine/core";

export const useMarkdownStyles = createStyles((theme) => ({
    stylesProvider: {
        p: {
            color: theme.other.textSecondary,
            fontWeight: 500,
            fontSize: theme.fontSizes.lg,
            lineHeight: 1.7,
            letterSpacing: '0.03rem',
        },
        strong: {color: theme.other.white},
        'h2,h3,h4': {
            color: theme.other.primary,
            marginTop: rem(24),
            marginBottom: rem(8),
        },
        h2: {
            fontSize: rem(32),
        },
        h3: {
            fontSize: rem(24),
        },
        h4: {
            fontSize: rem(20),
        },
    },
}));