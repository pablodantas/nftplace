export const resolveIPFS = (url) => {
    if (!url || !url.includes('ipfs://')) {
      console.log(url) ;
    }
    url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    console.log(url);
  };