#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-nanoserver-1903 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS build
WORKDIR /src
COPY ["SGmach.angular/SGmach.angular.csproj", "SGmach.angular/"]
COPY ["SGmach.API/SGmach.API.csproj", "SGmach.API/"]
COPY ["SGmach.DTO/SGmach.DTO.csproj", "SGmach.DTO/"]
COPY ["SGmach.BL/SGmach.BL.csproj", "SGmach.BL/"]
COPY ["SGmach.Entity/SGmach.Entity.csproj", "SGmach.Entity/"]
RUN dotnet restore "SGmach.angular/SGmach.angular.csproj"
COPY . .
WORKDIR "/src/SGmach.angular"
RUN dotnet build "SGmach.angular.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SGmach.angular.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SGmach.angular.dll"]