FROM rust:bullseye AS build
RUN cargo install obsidian-export
ENTRYPOINT ["obsidian-export"]