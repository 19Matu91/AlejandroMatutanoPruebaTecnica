const useFetch = () => {

    const fetchData = async (uri) => await fetch(uri).then(data => data.json())

    return {
        fetchData
    }
}

export default useFetch
