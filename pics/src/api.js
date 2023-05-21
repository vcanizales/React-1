import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aEb9eObr-ZPJVFVWqJL8yLJ8OqneJnggHRymgodST8U'
        },
        params: {
            query: 'cars'
        }
    });
    console.log(response);
    return response;
};

export default searchImages;