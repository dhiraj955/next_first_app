"use server";

import { cookies } from "next/headers";

export async function setCookies(name: string, value: string){
    const cookie = await cookies();
    const now = new Date();
    let time = now.getTime();
    time += 60 * 60 * 1000;
    now.setTime(time);
    cookie.set(name, value, {httpOnly: true, expires: now});
}

export async function getCookies(name: string){
    const cookie = await cookies();
    return cookie.get(name)?.value;
}

export async function removeCookies(name: string){
    const cookie = await cookies();
    cookie.delete(name);
    return true;
}