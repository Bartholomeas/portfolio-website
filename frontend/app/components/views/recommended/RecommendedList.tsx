import React from 'react';
import {IconExternalLink} from '@tabler/icons-react';


import {ActionIcon, Card, Group, Stack, TimelineItem, Tooltip,} from '@/components/common/mantine';
import {Text} from '@/components/common/mantine/Text';
import {Title} from '@/components/common/mantine/Title';

import {MarkdownContent} from '@/components/common/special/MarkdownContent';

import {RecommendedTimeline} from './RecommendedTimeline';

import {RecommendedItemsGroup} from '@/types/pages';

type Props = {
    list: RecommendedItemsGroup;
};

export function RecommendedList({list}: Props) {
    return (
        <Stack w="100%" h="100%">
            <Title textColor="textPrimary" order={2}>
                {list.title}
            </Title>

            <RecommendedTimeline>
                {list.items.length > 0 ? (
                    list.items.map((item, index) => (
                        <TimelineItem
                            mt={8}
                            key={`${item.title}-${item.id}`}
                            bullet={
                                <Text size="sm" fw={700} textColor="textPrimary">
                                    {index + 1}
                                </Text>
                            }
                            title={
                                <Group spacing={8}>
                                    <Text fw={600} textColor="textPrimary" size="sm">
                                        {item.title}
                                    </Text>
                                    {item.link && (
                                        <Tooltip label={item.link}>
                                            <ActionIcon
                                                component="a"
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="subtle"
                                                color="primary"
                                                radius={999}
                                                size="xs"
                                            >
                                                <IconExternalLink size={12}/>
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </Group>
                            }
                        >
                            {item.description && (
                                <Card p={8}>
                                    <MarkdownContent content={item.description}/>
                                </Card>
                            )}
                        </TimelineItem>
                    ))
                ) : (
                    <Text textColor="textSecondary">Brak wyników</Text>
                )}
            </RecommendedTimeline>
        </Stack>
    );
}
