import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { AccentSpan } from '@/components/common/special/AccentSpan';

export function RecommendedHeader() {
  return (
    <Stack spacing={16} mb={48}>
      <Title order={1} size={64} lh={1} textColor="textPrimary">
        Rzeczy, które <AccentSpan>polecam!</AccentSpan>
      </Title>
      <Title order={2} textColor="textSecondary">
        Znajdziesz tutaj wszystkie rzeczy, które lubię, używam i polecam.
      </Title>
    </Stack>
  );
}
