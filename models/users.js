let users = [
    { id: 1, name: "Lola", email: "lola@gmail.com", password: "123456" },
    { id: 2, name: "Josepf", email: "josepf@gmail.com", password: "123456" },
    { id: 3, name: "Wahid", email: "wahid@gmail.com", password: "123456" },
    { id: 4, name: "Ludo", email: "ludo@gmail.com", password: "123456" },
    { id: 5, name: "Elodie", email: "elodie@gmail.com", password: "123456" },
];
export function getAllUsers() {
    return users;
}

export function addUser(newUser) {
    users.push(newUser);
}

export function findUserById(id) {
    return users.find((u) => u.id == id);
}

export function findUserByEmail(email) {
    return users.find((u) => u.email == email);
}

export function passwordVerify(password) {
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    return passwordRegex.test(password);
}
