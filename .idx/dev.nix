{ pkgs, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages.
  packages = [ pkgs.nodejs ];

  # Sets environment variables in the workspace.
  env = { };

  # Defines shell aliases.
  # startup.pre-init = [
  #   "echo \"Hello, World!\""
  # ];
}