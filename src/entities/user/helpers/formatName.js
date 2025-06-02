export const formatName = (user) => {
    if (!user) {
        return '';
    }

    return `${user.first_name} ${user.last_name} <${user.username}>`;
};
