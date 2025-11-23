{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
  ];
  idx.extensions = [
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "start"
        ];
        manager = "web";
      };
    };
  };
}
