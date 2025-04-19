const getStoredData = () => {
    const storedBookSTR = localStorage.getItem('readlist');

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
} 

const addToStoreDB = (id) => {
    const storedBookData = getStoredData();
   

    if (storedBookData.includes(id)) {
        alert('bhai ei id already exist');
    }

    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readlist',data)
        // console.log(storedBookData)
    }
}

export { addToStoreDB,getStoredData };