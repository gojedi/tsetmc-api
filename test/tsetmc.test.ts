import { assets, history, messages, intraday } from '../src';
// import fs from 'fs';
// fs.writeFileSync('out.txt', JSON.stringify(result, null, 1), 'utf-8');

describe('tsetmc.ir', () => {
  0 &&
    it('assets return a list', async () => {
      const result = await assets();
      expect(result).toEqual(
        expect.arrayContaining([
          {
            id: '44834847569322522',
            asset_code: 'IRO1CONT0001',
            group_code: 'N1',
            industry: 'ابزارپزشکي، اپتيکي و اندازه‌گيري',
            board: 'تابلو فرعي',
            symbol_latin: 'CONT1',
            name_latin: 'Iran Counter',
            symbol: 'آكنتور',
            name: 'كنتورسازي‌ايران‌',
          },
        ])
      );
    });

  0 &&
    it(
      'history returns a list',
      async () => {
        const result = await history('32338211917133256');
        expect(result).toEqual(
          expect.arrayContaining([
            {
              tarikh: '۱۳۹۳/۱۰/۸',
              date: '2014-12-29',
              count: 60,
              volume: 345319,
              value: 1067132820,
              open: 3010,
              high: 3157,
              low: 3010,
              close: 3100,
              final: 3090,
            },
          ])
        );
      },
      180 * 1000
    );

  0 &&
    it(
      'messages returns a list',
      async () => {
        const result = await messages('32338211917133256');
        expect(result).toEqual(
          expect.arrayContaining([
            {
              title: 'حراج مجدد نماد معاملاتي (پاساح)',
              tarikh: '98/11/8 10:21',
              content:
                'به اطلاع مي رساند،نماد معاملاتي حق تقدم شركت ايران ياسا تاير و رابر(پاساح)  باتوجه به عدم كشف قيمت قبل بدون محدوديت نوسان قيمت با استفاده از مكانيزم حراج  آماده انجام معامله مي باشد. مديريت عمليات بازار شركت بورس اوراق بهادار تهران',
            },
          ])
        );
      },
      60 * 1000
    );

  1 &&
    it(
      'intraday returns spot_prices, trades, and order_book',
      async () => {
        const result = await intraday('32338211917133256', '2020-03-16');

        expect(result.spot_prices).toEqual(
          expect.arrayContaining([
            {
              time: '09:02:22',
              close: 7452,
              final: 7722,
            },
          ])
        );

        expect(result.trades).toEqual(
          expect.arrayContaining([
            {
              time: '09:02:27',
              volume: 872,
              price: 8001,
            },
          ])
        );

        expect(result.order_book).toEqual(
          expect.arrayContaining([
            {
              time: '08:48:13',
              bid: 8390,
              ask: 8390,
            },
          ])
        );
      },
      180 * 1000
    );
});
