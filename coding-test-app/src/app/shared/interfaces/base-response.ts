export interface IBaseResponse {
    data: IImage[];
    pagination: {
        total_count: number,
        count: number,
        offset: number
    };
    mate: {
        status: number
        msg: string
        response_id: string
    };
}

export interface IImage {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {};
    user: {};
    analytics: {};
}
