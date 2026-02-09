export interface PageMetadata {
    title?: string
    description?: string
    keywords?: string[]
    canonicalUrl?: string
    ogImage?: string
    ogType?: string
    twitterCard?: string
}

const DEFAULT_OG_TYPE = "website";
const DEFAULT_TWITTER_CARD = "summary";
const DEFAULT_SITE_NAME = "StorageClass.info";

function setMetaTag(attribute: "name" | "property", key: string, value: string) {
    let metaTag = document.querySelector(`meta[${attribute}='${key}']`);
    if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute(attribute, key);
        document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", value);
}

function setCanonicalTag(url: string) {
    let linkTag = document.querySelector("link[rel='canonical']");
    if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", "canonical");
        document.head.appendChild(linkTag);
    }
    linkTag.setAttribute("href", url);
}

export function setPageMetadata(metadata: PageMetadata) {
    if (metadata.title) {
        let titleTag = document.querySelector("title");
        if (!titleTag) {
            titleTag = document.createElement("title");
            document.head.appendChild(titleTag);
        }
        titleTag.innerText = metadata.title;
        setMetaTag("property", "og:title", metadata.title);
        setMetaTag("name", "twitter:title", metadata.title);
    }

    if (metadata.description) {
        setMetaTag("name", "description", metadata.description);
        setMetaTag("property", "og:description", metadata.description);
        setMetaTag("name", "twitter:description", metadata.description);
    }

    if (metadata.keywords) {
        setMetaTag("name", "keywords", metadata.keywords.join(", "));
    }

    const canonicalUrl = metadata.canonicalUrl ?? window.location.href;
    setCanonicalTag(canonicalUrl);
    setMetaTag("property", "og:url", canonicalUrl);

    setMetaTag("property", "og:type", metadata.ogType ?? DEFAULT_OG_TYPE);
    setMetaTag("property", "og:site_name", DEFAULT_SITE_NAME);

    setMetaTag("name", "twitter:card", metadata.twitterCard ?? DEFAULT_TWITTER_CARD);

    if (metadata.ogImage) {
        setMetaTag("property", "og:image", metadata.ogImage);
        setMetaTag("name", "twitter:image", metadata.ogImage);
    }
}
