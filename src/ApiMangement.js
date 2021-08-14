
export const getOrganizationsByUserName = (userName) => {
    const organizationsURL = `https://api.github.com/users/${userName}/orgs`;

    return fetch(organizationsURL)
        .then(onResponse)
        .catch(onError);

}

export const getRepositoriesByUserName = (userName) => {
    const repositoriesURL = `https://api.github.com/users/${userName}/repos`;

    return fetch(repositoriesURL)
        .then(onResponse)
        .catch(onError);

}


const onResponse = (response) => {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response.json();
}

const onError = (error) => {
    console.error('Looks like there was a problem: ', error);
    
}


