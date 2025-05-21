export const parseHTML = (htmlString) => {
  if (!htmlString || typeof htmlString !== "string") return { __html: "" };
  const cleaned = htmlString.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "");
  return { __html: cleaned };
};

export const stripHtml = (html) => html.replace(/<[^>]*>?/gm, "");
