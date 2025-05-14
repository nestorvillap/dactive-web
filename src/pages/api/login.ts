import type { APIRoute } from "astro";

const COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  secure: import.meta.env.PROD,
  maxAge: 60 * 60 * 24 * 7, // 1 semana
};

function jsonResponse(data: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const formData = await request.formData();
    const password = formData.get("password")?.toString();

    if (!password) {
      return jsonResponse({ message: "Contraseña requerida." }, 400);
    }

    if (password !== import.meta.env.SECRET_PASSWORD) {
      return jsonResponse({ message: "Contraseña incorrecta." }, 401);
    }

    cookies.set("isLoggedIn", "true", COOKIE_OPTIONS);
    return jsonResponse({ message: "Login exitoso." }, 200);
  } catch (error) {
    console.error("Error en API login:", error);
    return jsonResponse({ message: "Error en el servidor." }, 500);
  }
};
