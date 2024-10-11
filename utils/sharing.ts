export const getShareUrl = (
  platform: "twitter" | "facebook" | "linkedin",
  title: string,
  slug: string,
  tags: string[]
) => {
  // TODO: get url site
  const url = slug;

  switch (platform) {
    case "twitter": {
      const twitterUrl = new URL("https://twitter.com/intent/tweet");
      twitterUrl.searchParams.set("text", title);
      twitterUrl.searchParams.set("url", url);
      if (tags && tags.length > 0) {
        twitterUrl.searchParams.set("hashtags", tags.join(","));
      }
      return twitterUrl.toString();
    }
    case "facebook": {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
    }
    case "linkedin": {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
    }
    default:
      return "#";
  }
};
