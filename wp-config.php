<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_3mod_jquery_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('FS_METHOD','direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'D.~[<pl?Ry-M-lk8}@kwL^}f?ca0=qx6]S_/4_e&Z8H641{wpPhSW(k1kw4TLy95');
define('SECURE_AUTH_KEY',  'G5j*d4RT5RQ?bpjy30d#14Cu>hg*] `I&ztGrm-fh;qVM|1~;hM3Xx*W^)+OqF=4');
define('LOGGED_IN_KEY',    'W[Wwg$er4GX}k(c(f?1G_MdJ`CZ0gM;Nlgb<dh9?$O|qfR|Kt~UyL$s8:zK&{NfD');
define('NONCE_KEY',        '{KDr+YHNLno/cR~N_.bT`)IuBPo#$;sG}%F%)1n@`|Lk0Kc4GBh(TmY?vS*5N{OH');
define('AUTH_SALT',        ')/<f;!J?G$j%lOizc8qgoGUm5cNvR|Dv-RGq|If4#]~iT^jBoCpxXk2cZ<_R%Sre');
define('SECURE_AUTH_SALT', 'RUq5T`ngm}0fKQ2U.|Ikz07r@rCb PSb+wKW &=O^.5%;-cHZ8=&VydF=9jlR{^L');
define('LOGGED_IN_SALT',   'YSYHxylvg-q?|.I,pl*&fwiR~cH|i`kIp-~0otVpthBTG<g3]3;4P<ew|J(-Zg<$');
define('NONCE_SALT',       ':|!VN*iYz!x5e:!;8n5/--_#Jou33><Ikt2bam&$nLkZTDYH+{K{f|~<+UshHh`C');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
