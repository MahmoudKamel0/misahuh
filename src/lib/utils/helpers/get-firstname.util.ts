export const getFirstName = (name: string) => {
    const [firstname] = name.split(" ");
    return firstname;
};
