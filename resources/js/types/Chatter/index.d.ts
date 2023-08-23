export interface messageFileInterface {
    id: number;
    link: string;
    title: string;
    type: 'image'|'voice'|'video'|'other';
    data:Date;
}

export interface MessageInterface {
    id: number;
    is_me?:boolean;
    author?:number;
    content?: string;
    files?: messageFileInterface[];
    date:Date;
}


