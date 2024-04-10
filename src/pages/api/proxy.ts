import { addProtocolToUrl } from "@/utils";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const urlFromQuery = searchParams.get("url");
  if (!urlFromQuery) {
    return new Response(
      JSON.stringify({
        error: "Missing url query parameter",
      }),
      {
        status: 400,
      }
    );
  }

  const decodedUrl = decodeURIComponent(urlFromQuery);
  const targetUrl = addProtocolToUrl(decodedUrl);
  try {
    const urlResponse = await fetch(targetUrl);
    return urlResponse;
  } catch (error) {
    console.error(`Error when processing, URL -> ${targetUrl}: ${error}`);
    return new Response(
      JSON.stringify({
        error: "Error in fetching url"
      }),
      {
        status: 500,
      }
    );
  }
};

export default handler;
