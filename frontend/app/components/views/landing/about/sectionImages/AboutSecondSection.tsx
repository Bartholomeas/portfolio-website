import React, { useEffect, useRef, useState } from 'react';

import { Box } from '@/components/common/mantine';

import { Image } from '@/components/common/mantine/Image';
import { Text } from '@/components/common/mantine/Text';
import { MacWindow } from '@/components/common/special/macWindow/MacWindow';

import { StrapiImage } from '@/types';

type Props = {
  image: StrapiImage | undefined;
  alignLeft?: boolean;
};

export function AboutSecondSection({ image, alignLeft = false }: Props) {
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(
        `${fakeCode} ${fakeCode} ${fakeCode}`.slice(0, displayedText.length + 1)
      );
    }, 10);
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }

    return () => clearInterval(interval);
  }, [displayedText]);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: 500,
      }}
    >
      <MacWindow
        withGlassBg
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          right: alignLeft ? 0 : 'auto',
          top: 0,
        }}
      >
        {image && (
          <Image
            src={image?.url}
            alt={image?.alternativeText ?? 'Zdjęcie kodu'}
            loading="lazy"
            fill
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </MacWindow>

      <MacWindow
        withGlassBg
        sx={{
          position: 'absolute',
          width: '60%',
          height: '100%',
          maxHeight: 200,
          bottom: -80,
          left: 25,
        }}
      >
        <Text
          ref={textRef}
          size="xs"
          sx={{
            color: 'limegreen',
            height: 200,
            width: '100%',
            bottom: 0,
            overflowY: 'auto',
            zIndex: 0,
          }}
        >
          {displayedText}
        </Text>
      </MacWindow>
    </Box>
  );
}

const fakeCode = `
struct group_info init_groups = { .usage = ATOMIC_INIT(2) };
struct group_info *groups_alloc(int gidsetsize){
    struct group_info *group_info;
    int nblocks;
    int i;
    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
    nblocks = nblocks ? : 1;
    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);

    if (!group_info)

        return NULL;

    group_info->ngroups = gidsetsize;

    group_info->nblocks = nblocks;

    atomic_set(&group_info->usage, 1);



    if (gidsetsize <= NGROUPS_SMALL)

        group_info->blocks[0] = group_info->small_block;

    else {

        for (i = 0; i < nblocks; i++) {

            gid_t *b;

            b = (void *)__get_free_page(GFP_USER);

            if (!b)

                goto out_undo_partial_alloc;

            group_info->blocks[i] = b;
        }
    }

    return group_info;

out_undo_partial_alloc:

    while (--i >= 0) {

        free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);

    return NULL;

}

EXPORT_SYMBOL(groups_alloc);

void groups_free(struct group_info *group_info)

{

    if (group_info->blocks[0] != group_info->small_block) {

        int i;

        for (i = 0; i < group_info->nblocks; i++)

            free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);
}

EXPORT_SYMBOL(groups_free);

/* export the group_info to a user-space array */

static int groups_to_user(gid_t __user *grouplist,

              const struct group_info *group_info)
{

    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);



        if (copy_to_user(grouplist, group_info->blocks[i], len))

            return -EFAULT;



        grouplist += NGROUPS_PER_BLOCK;

        count -= cp_count;

    }

    return 0;
}

static int groups_from_user(struct group_info *group_info,

    gid_t __user *grouplist)

{
    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);

        struct group_info init_groups = { .usage = ATOMIC_INIT(2) };

struct group_info *groups_alloc(int gidsetsize){
    struct group_info *group_info;
    int nblocks;
    int i;
    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
    nblocks = nblocks ? : 1;
    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);

    if (!group_info)

        return NULL;

    group_info->ngroups = gidsetsize;

    group_info->nblocks = nblocks;

    atomic_set(&group_info->usage, 1);



    if (gidsetsize <= NGROUPS_SMALL)

        group_info->blocks[0] = group_info->small_block;

    else {

        for (i = 0; i < nblocks; i++) {

            gid_t *b;

            b = (void *)__get_free_page(GFP_USER);

            if (!b)

                goto out_undo_partial_alloc;

            group_info->blocks[i] = b;
        }
    }

    return group_info;

out_undo_partial_alloc:

    while (--i >= 0) {

        free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);

    return NULL;

}

EXPORT_SYMBOL(groups_alloc);

void groups_free(struct group_info *group_info)

{

    if (group_info->blocks[0] != group_info->small_block) {

        int i;

        for (i = 0; i < group_info->nblocks; i++)

            free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);
}

EXPORT_SYMBOL(groups_free);

/* export the group_info to a user-space array */

static int groups_to_user(gid_t __user *grouplist,

              const struct group_info *group_info)
{

    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);



        if (copy_to_user(grouplist, group_info->blocks[i], len))

            return -EFAULT;



        grouplist += NGROUPS_PER_BLOCK;

        count -= cp_count;

    }

    return 0;
}

static int groups_from_user(struct group_info *group_info,

    gid_t __user *grouplist)

{
    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);
        struct group_info init_groups = { .usage = ATOMIC_INIT(2) };

struct group_info *groups_alloc(int gidsetsize){
    struct group_info *group_info;
    int nblocks;
    int i;
    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
    nblocks = nblocks ? : 1;
    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);

    if (!group_info)

        return NULL;

    group_info->ngroups = gidsetsize;

    group_info->nblocks = nblocks;

    atomic_set(&group_info->usage, 1);



    if (gidsetsize <= NGROUPS_SMALL)

        group_info->blocks[0] = group_info->small_block;

    else {

        for (i = 0; i < nblocks; i++) {

            gid_t *b;

            b = (void *)__get_free_page(GFP_USER);

            if (!b)

                goto out_undo_partial_alloc;

            group_info->blocks[i] = b;
        }
    }

    return group_info;

out_undo_partial_alloc:

    while (--i >= 0) {

        free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);

    return NULL;

}

EXPORT_SYMBOL(groups_alloc);

void groups_free(struct group_info *group_info)

{

    if (group_info->blocks[0] != group_info->small_block) {

        int i;

        for (i = 0; i < group_info->nblocks; i++)

            free_page((unsigned long)group_info->blocks[i]);

    }

    kfree(group_info);
}

EXPORT_SYMBOL(groups_free);

/* export the group_info to a user-space array */

static int groups_to_user(gid_t __user *grouplist,

              const struct group_info *group_info)
{

    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);



        if (copy_to_user(grouplist, group_info->blocks[i], len))

            return -EFAULT;



        grouplist += NGROUPS_PER_BLOCK;

        count -= cp_count;

    }

    return 0;
}

static int groups_from_user(struct group_info *group_info,

    gid_t __user *grouplist)

{
    int i;

    unsigned int count = group_info->ngroups;

    for (i = 0; i < group_info->nblocks; i++) {

        unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

        unsigned int len = cp_count * sizeof(*grouplist);
  `;
