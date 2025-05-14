export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const formData = await request.formData();
    const password = formData.get("password")?.toString();

    if (!password) {
      return new Response(
        JSON.stringify({ message: "Contraseña requerida." }),
        { status: 400 }
      );
    }

    const serverPassword = import.meta.env.SECRET_PASSWORD;

    if (password === serverPassword) {
      cookies.set("isLoggedIn", "true", {
        path: "/",
        httpOnly: true,
        secure: import.meta.env.PROD, // true en producción, false en desarrollo
        maxAge: 60 * 60 * 24 * 7, // 1 semana de duración
      });
      return new Response(JSON.stringify({ message: "Login exitoso." }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ message: "Contraseña incorrecta." }),
        { status: 401 }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en el servidor." }), {
      status: 500,
    });
  }
};
