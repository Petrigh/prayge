export class God {
  constructor(
    public name: string,
    public domain: string,
    public sphere: Sphere,
    public worshipers: string,
    public avatar: string
  ) {}
}

export class Sphere{  
  constructor(
    public name: string,
    public favorites: string[],
    public thoughts: string,
  ) {}
}