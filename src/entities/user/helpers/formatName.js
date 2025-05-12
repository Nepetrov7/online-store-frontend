export const formatName = (user) => {
    if (!user) return '';
    return `${user.name} <${user.email}>`;
};
