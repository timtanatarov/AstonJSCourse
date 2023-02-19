const createLiker = () => {
    let likes = 0;
    return {
        like() {
            ++likes;
            return this;
        },

        dislike() {
            --likes;
            return this;
        },

        val() {
            return likes;
        },
    };
};
