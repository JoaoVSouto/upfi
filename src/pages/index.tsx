import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

type Image = {
  id: string;
  title: string;
  description: string;
  url: string;
  ts: number;
};

type ImagesAPIResponse = {
  data: Image[];
  after: string | null;
};

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    ({ pageParam = null }) =>
      api
        .get<ImagesAPIResponse>('/api/images', {
          params: {
            after: pageParam,
          },
        })
        .then(({ data: incomingData }) => incomingData),
    {
      getNextPageParam: lastPage => lastPage.after,
    }
  );

  const formattedData = useMemo(
    () => data.pages.map(page => page.data).flat(),
    [data]
  );

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
