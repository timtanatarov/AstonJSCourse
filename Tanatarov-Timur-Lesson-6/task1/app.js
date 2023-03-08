const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
};

const main = async () => {
    const postsData = await getPosts();
    let currentPage = 1;
    let rows = 10;
    const showList = (arrPosts, rowPerPage, page) => {
        const postsElem = document.querySelector('.posts');
        postsElem.innerHTML = '';
        page--;
        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedPosts = arrPosts.slice(start, end);
        paginatedPosts.forEach(e => {
            const postElem = document.createElement('div');
            postElem.classList.add('post');
            postElem.innerText = `${e.title}`;
            postsElem.appendChild(postElem);
        });
    };

    const showPaginationBtn = (page) => {
        const liElem = document.createElement('li');
        liElem.classList.add('pagination_item');
        liElem.innerText = page;

        if (currentPage === page) liElem.classList.add('pagination_item_active');

        liElem.addEventListener('click', () => {
            currentPage = page;
            showList(postsData, rows, currentPage);

            let currentItemLi=document.querySelector('li.pagination_item_active');
            currentItemLi.classList.remove('pagination_item_active');

            liElem.classList.add('pagination_item_active');
        })

        return liElem;
    };

    const showPagination = (arrPosts, rowPerPage) => {
        const paginationElem = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrPosts.length / rowPerPage);
        const ulElem = document.createElement("ul");
        ulElem.classList.add('pagination_list');

        for (let i = 0; i < pagesCount; i++) {
            const liElem = showPaginationBtn(i + 1);
            ulElem.appendChild(liElem);
        }

        paginationElem.appendChild(ulElem);
    };

    showList(postsData, rows, currentPage);
    showPagination(postsData, rows);
};

main();