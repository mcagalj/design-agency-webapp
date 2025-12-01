import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeCategory'
 * @name TypeCategoryFields
 * @type {TypeCategoryFields}
 * @memberof TypeCategory
 */
export interface TypeCategoryFields {
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label: EntryFieldTypes.Symbol<"clothing" | "cosmetics" | "entertainment" | "food" | "technology">;
}

/**
 * Entry skeleton type definition for content type 'category' (Category)
 * @name TypeCategorySkeleton
 * @type {TypeCategorySkeleton}
 * @author 5ePuMPFtB46jrgoBBxBDv5
 * @since 2023-11-07T12:16:55.909Z
 * @version 13
 */
export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
/**
 * Entry type definition for content type 'category' (Category)
 * @name TypeCategory
 * @type {TypeCategory}
 * @author M C<marijana.cagalj@gmail.com>
 * @since 2023-11-07T12:16:55.909Z
 * @version 13
 * @link https://app.contentful.com/spaces/g853qxkqyatt/environments/master/content_types/category
 */
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
export type TypeCategoryWithoutLinkResolutionResponse = TypeCategory<"WITHOUT_LINK_RESOLUTION">;
export type TypeCategoryWithoutUnresolvableLinksResponse = TypeCategory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCategoryWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCategory<"WITH_ALL_LOCALES", Locales>;
export type TypeCategoryWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCategory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCategoryWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCategory<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

/**
 * Fields type definition for content type 'TypeCodeBlockSection'
 * @name TypeCodeBlockSectionFields
 * @type {TypeCodeBlockSectionFields}
 * @memberof TypeCodeBlockSection
 */
export interface TypeCodeBlockSectionFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'dataLines' (Data lines)
     * @name Data lines
     * @localized false
     */
    dataLines?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'language' (Language)
     * @name Language
     * @localized false
     */
    language?: EntryFieldTypes.Symbol<"bash" | "cpp" | "csharp" | "css" | "graphql" | "javascript" | "jsx" | "markup" | "python" | "shell" | "typescript">;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized false
     */
    content?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'codeBlockSection' (Code-block section)
 * @name TypeCodeBlockSectionSkeleton
 * @type {TypeCodeBlockSectionSkeleton}
 * @author 5ePuMPFtB46jrgoBBxBDv5
 * @since 2023-11-27T12:56:36.380Z
 * @version 5
 */
export type TypeCodeBlockSectionSkeleton = EntrySkeletonType<TypeCodeBlockSectionFields, "codeBlockSection">;
/**
 * Entry type definition for content type 'codeBlockSection' (Code-block section)
 * @name TypeCodeBlockSection
 * @type {TypeCodeBlockSection}
 * @author M C<marijana.cagalj@gmail.com>
 * @since 2023-11-27T12:56:36.380Z
 * @version 5
 * @link https://app.contentful.com/spaces/g853qxkqyatt/environments/master/content_types/codeBlockSection
 */
export type TypeCodeBlockSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCodeBlockSectionSkeleton, Modifiers, Locales>;
export type TypeCodeBlockSectionWithoutLinkResolutionResponse = TypeCodeBlockSection<"WITHOUT_LINK_RESOLUTION">;
export type TypeCodeBlockSectionWithoutUnresolvableLinksResponse = TypeCodeBlockSection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCodeBlockSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCodeBlockSection<"WITH_ALL_LOCALES", Locales>;
export type TypeCodeBlockSectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCodeBlockSection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCodeBlockSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCodeBlockSection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

/**
 * Fields type definition for content type 'TypeNavigation'
 * @name TypeNavigationFields
 * @type {TypeNavigationFields}
 * @memberof TypeNavigation
 */
export interface TypeNavigationFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navItems' (Nav items)
     * @name Nav items
     * @localized false
     */
    navItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavItemSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'navigation' (Navigation)
 * @name TypeNavigationSkeleton
 * @type {TypeNavigationSkeleton}
 * @author 5ePuMPFtB46jrgoBBxBDv5
 * @since 2024-11-21T11:18:33.000Z
 * @version 15
 */
export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
/**
 * Entry type definition for content type 'navigation' (Navigation)
 * @name TypeNavigation
 * @type {TypeNavigation}
 * @author M C<marijana.cagalj@gmail.com>
 * @since 2024-11-21T11:18:33.000Z
 * @version 15
 * @link https://app.contentful.com/spaces/g853qxkqyatt/environments/master/content_types/navigation
 */
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;
export type TypeNavigationWithoutLinkResolutionResponse = TypeNavigation<"WITHOUT_LINK_RESOLUTION">;
export type TypeNavigationWithoutUnresolvableLinksResponse = TypeNavigation<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNavigationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigation<"WITH_ALL_LOCALES", Locales>;
export type TypeNavigationWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigation<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNavigationWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigation<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

/**
 * Fields type definition for content type 'TypeNavItem'
 * @name TypeNavItemFields
 * @type {TypeNavItemFields}
 * @memberof TypeNavItem
 */
export interface TypeNavItemFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'path' (Path)
     * @name Path
     * @localized false
     */
    path: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'includeInProd' (Include in prod)
     * @name Include in prod
     * @localized false
     */
    includeInProd?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'navItem' (NavItem)
 * @name TypeNavItemSkeleton
 * @type {TypeNavItemSkeleton}
 * @author 5ePuMPFtB46jrgoBBxBDv5
 * @since 2024-11-21T11:23:43.438Z
 * @version 7
 */
export type TypeNavItemSkeleton = EntrySkeletonType<TypeNavItemFields, "navItem">;
/**
 * Entry type definition for content type 'navItem' (NavItem)
 * @name TypeNavItem
 * @type {TypeNavItem}
 * @author M C<marijana.cagalj@gmail.com>
 * @since 2024-11-21T11:23:43.438Z
 * @version 7
 * @link https://app.contentful.com/spaces/g853qxkqyatt/environments/master/content_types/navItem
 */
export type TypeNavItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavItemSkeleton, Modifiers, Locales>;
export type TypeNavItemWithoutLinkResolutionResponse = TypeNavItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeNavItemWithoutUnresolvableLinksResponse = TypeNavItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNavItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNavItem<"WITH_ALL_LOCALES", Locales>;
export type TypeNavItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNavItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNavItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNavItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

/**
 * Fields type definition for content type 'TypeProduct'
 * @name TypeProductFields
 * @type {TypeProductFields}
 * @memberof TypeProduct
 */
export interface TypeProductFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'id' (ID)
     * @name ID
     * @localized false
     */
    id: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'listed' (Listed)
     * @name Listed
     * @localized false
     */
    listed: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'price' (Price)
     * @name Price
     * @localized false
     */
    price: EntryFieldTypes.Number;
    /**
     * Field type definition for field 'currencyCode' (Currency code)
     * @name Currency code
     * @localized false
     */
    currencyCode: EntryFieldTypes.Symbol<"CHF" | "EUR" | "GBP" | "USD">;
    /**
     * Field type definition for field 'categories' (Categories)
     * @name Categories
     * @localized false
     */
    categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCategorySkeleton>>;
    /**
     * Field type definition for field 'heroImage' (Hero image)
     * @name Hero image
     * @localized false
     */
    heroImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'images' (Images)
     * @name Images
     * @localized false
     */
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    /**
     * Field type definition for field 'richTextDescription' (Rich text description)
     * @name Rich text description
     * @localized false
     */
    richTextDescription?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'product' (Product)
 * @name TypeProductSkeleton
 * @type {TypeProductSkeleton}
 * @author 5ePuMPFtB46jrgoBBxBDv5
 * @since 2023-11-07T11:56:50.442Z
 * @version 27
 */
export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, "product">;
/**
 * Entry type definition for content type 'product' (Product)
 * @name TypeProduct
 * @type {TypeProduct}
 * @author M C<marijana.cagalj@gmail.com>
 * @since 2023-11-07T11:56:50.442Z
 * @version 27
 * @link https://app.contentful.com/spaces/g853qxkqyatt/environments/master/content_types/product
 */
export type TypeProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductSkeleton, Modifiers, Locales>;
export type TypeProductWithoutLinkResolutionResponse = TypeProduct<"WITHOUT_LINK_RESOLUTION">;
export type TypeProductWithoutUnresolvableLinksResponse = TypeProduct<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProductWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProduct<"WITH_ALL_LOCALES", Locales>;
export type TypeProductWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProduct<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProductWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProduct<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
