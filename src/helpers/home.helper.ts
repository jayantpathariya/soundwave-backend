import { createImageLinks } from "@/lib/utils";
import { Home, HomeAPIResponse, HomeItem } from "@/types/home.type";

export const formatHome = (homeData: HomeAPIResponse): Home => {
  const newTrending: HomeItem[] = homeData.new_trending.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.header_desc,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: item.year ? parseInt(item.year) : null,
      playCount: item.play_count ? parseInt(item.play_count) : null,
      language: item.language,
      explicitContent: item.explicit_content === "1",
    };
  });

  const topPlaylists: HomeItem[] = homeData.top_playlists.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.subtitle,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: null,
      playCount: null,
      language: null,
      explicitContent: item.explicit_content === "1",
    };
  });

  const newAlbums: HomeItem[] = homeData.new_albums.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.header_desc,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: item.year ? parseInt(item.year) : null,
      playCount: item.play_count ? parseInt(item.play_count) : null,
      language: item.language,
      explicitContent: item.explicit_content === "1",
    };
  });

  // const browseDiscover: HomeItem[] = homeData.browse_discover.map((item) => {
  //   return {
  //     id: item.id,
  //     title: item.title,
  //     description: item.subtitle,
  //     type: item.type,
  //     image: createImageLinks(item.image),
  //     url: item.perma_url,
  //     year: null,
  //     playCount: null,
  //     language: null,
  //     explicitContent: item.explicit_content === "1",
  //   };
  // });

  const charts: HomeItem[] = homeData.charts.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.more_info.firstname,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: null,
      playCount: null,
      language: null,
      explicitContent: item.explicit_content === "1",
    };
  });

  const radio: HomeItem[] = homeData.radio.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.subtitle,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: null,
      playCount: null,
      language: null,
      explicitContent: item.explicit_content === "1",
    };
  });

  const artistRecos: HomeItem[] = homeData.artist_recos.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.subtitle,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: null,
      playCount: null,
      language: null,
      explicitContent: item.explicit_content === "1",
    };
  });

  const tagMixes: HomeItem[] = homeData.tag_mixes.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.header_desc,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: item.year ? parseInt(item.year) : null,
      playCount: null,
      language: item.language,
      explicitContent: item.explicit_content === "1",
    };
  });

  const cityMod: HomeItem[] = homeData.city_mod.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.subtitle,
      type: item.type,
      image: createImageLinks(item.image),
      url: item.perma_url,
      year: null,
      playCount: null,
      language: null,
      explicitContent: item.explicit_content === "1",
    };
  });

  return [
    {
      title: "Trending Now",
      items: newTrending,
    },
    {
      title: "Top Charts",
      items: charts,
    },
    // {
    //   title: "Browse Discover",
    //   items: browseDiscover,
    // },
    {
      title: "New Releases",
      items: newAlbums,
    },
    {
      title: "Editors Picks",
      items: topPlaylists,
    },
    {
      title: "Radio Stations",
      items: radio,
    },
    { title: "Recommended Artist Stations", items: artistRecos },
    { title: "What's Hot Now in Your City", items: cityMod },
    { title: "Pick Your Mood", items: tagMixes },
  ];
};
