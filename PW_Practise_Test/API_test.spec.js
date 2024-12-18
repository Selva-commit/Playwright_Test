import{test, expect} from "@playwright/test";

test('API GET Request', async({request}) => {
     var GetResponse1 = await request.get('https://reqres.in/api/users/2');
     expect(GetResponse1.status()).toBe(200);

     var GetResponse1_text = await GetResponse1.text();
     expect(GetResponse1_text).toContain('janet.weaver@reqres.in');

     console.log(await GetResponse1.json());

}) 
