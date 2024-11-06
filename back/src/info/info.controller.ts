import { Controller, Get, Delete } from '@nestjs/common';
import { InfoService } from './info.service';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  listAllEndpointsSorted() {
    return this.infoService.listAllEndpointsSorted();
  }

  @Get('system')
  getSystemInfo() {
    return this.infoService.getSystemInfo();
  }

  @Get('time')
  async getServerAndDatabaseTime() {
    return await this.infoService.getServerAndDatabaseTime();
  }

  @Delete('resetDatabase')
  resetDatabase() {
    return this.infoService.resetDatabase();
  }

  @Get('infoDatabase')
  getDatabaseInfo() {
    return this.infoService.getDatabaseInfo();
  }

  @Get('entities')
  getEntitiesInfo() {
    return this.infoService.getEntitiesInfo();
  }

  @Get('package.json')
  getPackageInfo() {
    return this.infoService.getPackageInfo();
  }

  @Get('domain')
  getServerDomain(@Req() request: Request) {
    const domain = `${request.protocol}://${request.get('host')}`;

    const info = {
      domain,
      protocol: request.protocol,
      host: request.get('host'),
      subdomain: request.subdomains[0],
      originalUrl: request.originalUrl,
      baseUrl: request.baseUrl,
      params: request.params,
      query: request.query,
      path: request.path,
      method: request.method,
      headers: request.headers,
      body: request.body,
      route: request.route,
    };
    return info;
  }

  @Get('cookies')
  getCookies(@Req() request: Request) {
    const cookies = this.parseCookies(request.headers.cookie || '');
    return { cookies };
  }

  private parseCookies(cookieHeader: string) {
    const cookies: { [key: string]: string } = {};
    cookieHeader.split(';').forEach((cookie) => {
      const [name, ...rest] = cookie.split('=');
      const value = rest.join('=').trim();
      if (name && value) {
        cookies[name.trim()] = decodeURIComponent(value);
      }
    });
    return cookies;
  }

  @Get('endpoints')
  getAllEndpoints() {
    return this.infoService.listAllEndpoints();
  }
}
