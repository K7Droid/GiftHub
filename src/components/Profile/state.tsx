import { ChangeEvent, useState } from "react";

/**
● Username
● Correo
● Contrasena
● Nombres
● Apellidos
● DPI
● Edad
*/
interface User {
    username?: string;
    email?: string;
    password?: string;
    name?: string;
    lastname?: string;
    dpi?: number;
    age?: number;
}

export default function useProfileState() {
    const [user, setUser] = useState<User>({
        age: 0,
        dpi: 0,
        email: '',
        lastname: '',
        name: '',
        password: '',
        username: ''
    });

    const changeUser = (newInfo: User) => {
        setUser((user) => ({ ...user, ...newInfo }));
    }

    const setAge = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ age: Number(event.target.value) });
    }

    const setDpi = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ dpi: Number(event.target.value) });
    }

    const setEmail = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ email: event.target.value });
    }

    const setLastname = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ lastname: event.target.value });
    }

    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ name: event.target.value });
    }

    const setUsername = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ username: event.target.value });
    }

    const setPassword = (event: ChangeEvent<HTMLInputElement>) => {
        changeUser({ password: event.target.value });
    }

    return {
        user,
        handles: {
            setPassword,
            setUsername,
            setLastname,
            setName,
            setEmail,
            setDpi,
            setAge
        }
    }
}