import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

export const useContentful = async () => {
    try{
        const response = await client.getEntries({
            order: 'sys.createdAt'
        });
        return response.items;
    } catch (error) {
        console.log(error);
        return [];
    }
};