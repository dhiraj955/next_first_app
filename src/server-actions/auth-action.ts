"use server";

import { LoginCredentials } from "@/types/auth-types";
import { redirect } from "next/navigation";
import { removeCookies } from "./cookies-action";


export async function login (data: LoginCredentials){
    if (data.username === "dhiraj" && data.password === "1234"){
        return { data: "login successful", isSuccess: true, token: "123 token"}
    } else {
        return {error: "invalid credentials", isSuccess: false};
    }
}

export async function logout(){
    await removeCookies("token");
    redirect("/signup/login");
}