import type { Metadata } from "next";

type OpenGraphType =
    | "website"
    | "article"
    | "profile"
    | "book"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";

interface CreateMetadataOptions {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: OpenGraphType;
}

export function createMetadata({
    title,
    description,
    image = "/images/base/notch-logo.jpg",
    url = "/",
    type = "website",
}: CreateMetadataOptions): Metadata {
    return {
        title,
        description,
        alternates: {
        canonical: url,
        },
        openGraph: {
        title,
        description,
        type,
        url,
        images: [
            {
            url: image,
            width: 1200,
            height: 630,
            },
        ],
        },
    };
}
