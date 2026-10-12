import { Component, input } from '@angular/core';

/** Marca do +party: logo em lettering (arquivo public/logo-party.png, fundo transparente). */
@Component({
  selector: 'app-party-logo',
  template: `
    <span class="logo" [class.is-lg]="size() === 'lg'">
      <img class="img" src="logo-party.png" alt="+party" width="560" height="376" />
      @if (tag()) {
        <span class="tag">{{ tag() }}</span>
      }
    </span>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      line-height: 1;
    }
    /* O lettering tem coroa e brilho, então precisa de altura maior que o
       antigo quadradinho para continuar legível dentro do cabeçalho de 72px. */
    .img {
      display: block;
      height: 60px;
      width: auto;
      margin-block: -6px;
    }
    .tag {
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--brand-300);
    }
    .is-lg .img { height: 104px; margin-block: 0; }
  `,
})
export class PartyLogo {
  readonly size = input<'md' | 'lg'>('md');
  readonly tag = input<string>('');
}
