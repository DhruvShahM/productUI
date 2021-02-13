import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  constructor() {}

  pageSize = 10;
}
