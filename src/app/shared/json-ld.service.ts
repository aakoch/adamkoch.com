import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {

	static scriptType = 'application/ld+json';
	static websiteSchema = (url?: string, name?: string) => {
		return {
			'@context': 'http://schema.org',
			'@type'      : 'WebSite',
			url          : url || 'https:\/\/google.com',
			name         : name || 'Google',
			"sameAs": ["https://facebook.com/google",
				   "https://instagram.com/google",
				   "https://twitter.com/google"]
			};
	};

	static orgSchema = () => ({
			'@context'  :
				'https://schema.org',
			'@type'     :
				'Organization',
			url         :
				'https://adamkoch.com',
			name        :
				'Adam Koch',
			contactPoint: {
				'@type'    :
					'ContactPoint',
				telephone  :
					'000000000',
				contactType:
					'Customer service'
			}
		});

	constructor(@Inject(DOCUMENT) private _document: Document) {}

	removeStructuredData(): void {
		const els: Element[] = [];
		[ 'structured-data', 'structured-data-org' ].forEach(c => {
			els.push(...Array.from(this._document.head.getElementsByClassName(c)));
		});
		els.forEach(el => this._document.head.removeChild(el));
	}

	insertSchema(schema: Record<string, any>, className = 'structured-data'): void {
		let script: HTMLScriptElement;
		let shouldAppend = false;
		if (this._document.head.getElementsByClassName(className).length) {
			script = this._document.head.getElementsByClassName(className)[0] as HTMLScriptElement;
		} else {
			script = this._document.createElement('script');
			shouldAppend = true;
		}
		script.setAttribute('class', className);
		script.type = JsonLdService.scriptType;
		script.text = JSON.stringify(schema);
    console.log("wrote to script.txt: ", JSON.stringify(schema));
		if (shouldAppend) {
			this._document.head.appendChild(script);
		}
	}
}
