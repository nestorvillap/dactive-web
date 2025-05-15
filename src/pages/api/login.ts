import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

const COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  secure: import.meta.env.PROD,
  maxAge: 60 * 60 * 24 * 7,
};

function jsonResponse(data: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString();

  if (!password) {
    return jsonResponse({ message: "Contraseña requerida." }, 400);
  }

  const serverPassword = getSecret("SECRET_PASSWORD");

  if (password !== serverPassword) {
    return jsonResponse({ message: "Contraseña incorrecta." }, 401);
  }

  cookies.set("isLoggedIn", "true", COOKIE_OPTIONS);
  return jsonResponse({ message: "Login exitoso." }, 200);
};
