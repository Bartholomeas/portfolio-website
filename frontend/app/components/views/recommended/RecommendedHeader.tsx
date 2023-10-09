import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { AccentSpan } from '@/components/common/special/AccentSpan';

export function RecommendedHeader() {
  return (
    <Stack spacing={16} mb={48}>
      <Title order={1} size={64} textColor="textPrimary">
        Polecane
      </Title>
      <Title order={2} textColor="textPrimary">
        Znajdziesz tutaj wszystkie rzeczy, które <AccentSpan>lubię</AccentSpan>,{' '}
        <AccentSpan>używam</AccentSpan> i <AccentSpan>polecam</AccentSpan>.
      </Title>
    </Stack>
  );
}
